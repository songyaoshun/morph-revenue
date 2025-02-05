const fs = require('fs');
const csv = require('csv-parser');

// 输入和输出文件路径
const inputFilePath = 'revenue.csv'; // 替换为你的 CSV 文件路径
const outputFilePath = 'revenue.json'; // 输出的 JSON 文件路径
// 初始化 JSON 结构
const result = {
  head: [],
  body: []
};
// 读取 CSV 文件
fs.createReadStream(inputFilePath)
  .pipe(csv())
  .on('headers', (headers) => {
    // 读取表头
    result.head = headers;
  })
  .on('data', (row) => {
    // 将每一行数据转换为数组并添加到 body 中
    const rowData = result.head.map((header) => row[header] || ''); // 处理空值
    result.body.push(rowData);
  })
  .on('end', () => {
    // 将结果写入 JSON 文件
    fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 2));
    console.log('转换完成，结果已保存到:', outputFilePath);
  })
  .on('error', (error) => {
    console.error('读取 CSV 文件时出错:', error);
  });