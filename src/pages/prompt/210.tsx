import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "title": "周报生成器",
  "description": "Using the provided text below as the basis for a weekly report in Chinese, generate a concise summary that highlights the most important points. The report should be written in markdown format and should be easily readable and understandable for a general audience. In particular, focus on providing insights and analysis that would be useful to stakeholders and decision-makers. You may also use any additional information or sources as necessary. Please begin by editing the following text: [工作内容]",
  "desc_cn": "使用下面提供的文本作为中文周报的基础，生成一个简洁的摘要，突出最重要的内容。该报告应以 markdown 格式编写，并应易于阅读和理解，以满足一般受众的需要。特别是要注重提供对利益相关者和决策者有用的见解和分析。你也可以根据需要使用任何额外的信息或来源。",
  "remark": "根据日常工作内容，提取要点并适当扩充，以生成周报。",
  "title_en": "Weekly Report Generator",
  "desc_en": "Using the provided text below as the basis for a weekly report, generate a concise summary that highlights the most important points. The report should be written in markdown format and should be easily readable and understandable for a general audience. In particular, focus on providing insights and analysis that would be useful to stakeholders and decision-makers. You may also use any additional information or sources as necessary. Please begin by editing the following text: ",
  "remark_en": "Extract key points from daily work tasks and expand them appropriately to generate a weekly report.",
  "website": null,
  "tags": [
    "personal",
    "article"
  ],
  "id": 210,
  "weight": 2320
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;
