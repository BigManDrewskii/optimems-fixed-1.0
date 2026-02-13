#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const DIRECTORIES = [
  'public/blog-images/',
  'public/images/sections/',
  'public/images/hero/'
];

const MIN_SIZE_BYTES = 200 * 1024;
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function getImageSize(filePath) {
  const stats = await fs.promises.stat(filePath);
  return stats.size;
}

async function optimizeImage(filePath, ext) {
  const originalSize = await getImageSize(filePath);
  let pipeline = sharp(filePath);
  
  const metadata = await pipeline.metadata();
  
  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  
  let outputBuffer;
  let outputExt = ext;
  
  if (ext === '.png') {
    outputBuffer = await pipeline.webp({ quality: QUALITY }).toBuffer();
    outputExt = '.webp';
  } else {
    outputBuffer = await pipeline.jpeg({ quality: QUALITY, progressive: true }).toBuffer();
  }
  
  const outputPath = filePath.replace(/\.[^.]+$/, outputExt);
  await fs.promises.writeFile(outputPath, outputBuffer);
  
  const optimizedSize = outputBuffer.length;
  const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
  
  return {
    filePath,
    outputPath,
    originalSize,
    optimizedSize,
    savings,
    wasResized: metadata.width && metadata.width > MAX_WIDTH
  };
}

async function main() {
  console.log('🖼️  Image Optimization Script\n');
  
  const filesToProcess = [];
  
  for (const dir of DIRECTORIES) {
    const fullDir = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullDir)) continue;
    
    const entries = await fs.promises.readdir(fullDir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          const filePath = path.join(fullDir, entry.name);
          const size = await getImageSize(filePath);
          if (size > MIN_SIZE_BYTES) {
            filesToProcess.push({ filePath, ext });
          }
        }
      }
    }
  }
  
  console.log(`Found ${filesToProcess.length} images larger than 200KB to optimize\n`);
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  const results = [];
  
  for (const { filePath, ext } of filesToProcess) {
    try {
      const result = await optimizeImage(filePath, ext);
      results.push(result);
      totalOriginal += result.originalSize;
      totalOptimized += result.optimizedSize;
      
      const resizedMsg = result.wasResized ? ' (resized)' : '';
      const savingsColor = result.savings > 50 ? '🟢' : result.savings > 25 ? '🟡' : '🔴';
      console.log(`${savingsColor} ${path.basename(filePath)}`);
      console.log(`   ${(result.originalSize / 1024).toFixed(0)}KB → ${(result.optimizedSize / 1024).toFixed(0)}KB (${result.savings}% saved)${resizedMsg}`);
    } catch (err) {
      console.error(`❌ Failed: ${path.basename(filePath)} - ${err.message}`);
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('📊 SUMMARY');
  console.log('='.repeat(50));
  console.log(`Files processed: ${results.length}`);
  console.log(`Total before: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total after:  ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Saved:        ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)} MB (${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}%)`);
  console.log('='.repeat(50));
}

main().catch(console.error);
