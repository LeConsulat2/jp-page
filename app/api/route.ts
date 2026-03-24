import { NextResponse } from 'next/server';

export async function GET() {
  const portfolioLinks = [
    {
      title: 'Global Employee Metrics & Performances - Excel',
      url: 'https://onedrive.live.com/personal/d35bd98c5fb12bf6/_layouts/15/Doc.aspx?resid=D35BD98C5FB12BF6!s2c7e4b5207e84b858d4453821b77fea3&cid=d35bd98c5fb12bf6&migratedtospo=true&app=Excel',
      icon: '🌍',
      image: '/images/global.png',
      description:
        'Comprehensive Excel dashboard tracking global headcount, performance scores, attrition rates, and regional breakdowns across all business units.',
    },
    {
      title: 'Global Employee Metrics & Performances - PowerPoint',
      url: 'https://onedrive.live.com/personal/d35bd98c5fb12bf6/_layouts/15/Doc.aspx?resid=D35BD98C5FB12BF6!s8ebe20f711f0467d9daa71b1be6198a3&cid=d35bd98c5fb12bf6&migratedtospo=true&app=PowerPoint',
      icon: '🌍',
      image: '/images/global.png',
      description:
        'Executive-ready slides distilling the global employee metrics into a clear narrative for stakeholder reporting.',
    },
    {
      title: 'M&A Trends Report (2018–2022) - Excel',
      url: 'https://onedrive.live.com/personal/d35bd98c5fb12bf6/_layouts/15/Doc.aspx?resid=D35BD98C5FB12BF6!s3d4d2dca8a9b4fdfa0c5f2f8ea5ebea0&cid=d35bd98c5fb12bf6&migratedtospo=true&app=Excel',
      icon: '📊',
      image: '/images/M&A.png',
      description:
        'Five-year analysis of mergers & acquisition activity, deal volume, sector breakdown, and valuation trends across global markets.',
    },
    {
      title: 'Finance Dashboard (MyBank) - Excel',
      url: 'https://onedrive.live.com/personal/d35bd98c5fb12bf6/_layouts/15/Doc.aspx?resid=D35BD98C5FB12BF6!sc35c4a88d75b4e9481173edf9774f3e3&cid=d35bd98c5fb12bf6&migratedtospo=true&app=Excel',
      icon: '💹',
      image: '/images/finance.png',
      description:
        'Interactive Excel dashboard for a fictional retail bank covering revenue streams, loan performance, cost-to-income ratio, and branch-level KPIs.',
    },
    {
      title: 'Finance Dashboard (MyBank) - PowerPoint',
      url: 'https://onedrive.live.com/personal/d35bd98c5fb12bf6/_layouts/15/Doc.aspx?resid=D35BD98C5FB12BF6!s210a5c4eb4c04d1a97edb2bd4ea20fc8&cid=d35bd98c5fb12bf6&migratedtospo=true&app=PowerPoint',
      icon: '💹',
      image: '/images/finance.png',
      description:
        'Board-level presentation of the MyBank finance dashboard with clean charts and concise commentary.',
    },
    {
      title: 'Customer Behavior Insights - Excel',
      url: 'https://onedrive.live.com/personal/d35bd98c5fb12bf6/_layouts/15/Doc.aspx?resid=D35BD98C5FB12BF6!sb791e48f8456402ba81e52ce73e1fa08&cid=d35bd98c5fb12bf6&migratedtospo=true&app=Excel',
      icon: '📊',
      image: '/images/optimizing-market.png',
      description:
        'Deep-dive into customer purchase patterns, segmentation, churn signals, and lifetime value modelling to support data-driven marketing decisions.',
    },
    {
      title: 'Domestic & International Student Application Rates (2022–2023) - Excel',
      url: 'https://onedrive.live.com/personal/d35bd98c5fb12bf6/_layouts/15/Doc.aspx?resid=D35BD98C5FB12BF6!s62bf99fed6844ff98b62d91f76bc6706&cid=d35bd98c5fb12bf6&migratedtospo=true&app=Excel',
      icon: '📈',
      image: null,
      description:
        'Analysis of domestic vs. international enrolment trends across faculties, highlighting year-on-year shifts and intake forecasts.',
    },
    {
      title: 'Webscraping Python & Prompts used for Analysis - Notion',
      url: 'https://sweet-chill-fed.notion.site/Webscraping-and-Prompts-17c0e5ce0cfb80068d0afac535d51203',
      icon: '💡',
      image: null,
      description:
        'Documented Python web scraping workflow, prompt engineering techniques, and analysis methodology written up as a Notion case study.',
    },
    {
      title: 'Freelance Translation & Prompts used + My Thought Process - Notion',
      url: 'https://sweet-chill-fed.notion.site/Translation-Project-Method-and-Prompts-Used-17c0e5ce0cfb804095ade5e65d1bda8a',
      icon: '💡',
      image: null,
      description:
        'Behind-the-scenes look at a freelance translation project — prompts, quality checks, iteration process, and lessons learned.',
    },
    {
      title: 'SQL - Students Timetable Clashes Normalisation & my thought process - Notion',
      url: 'https://sweet-chill-fed.notion.site/SQL-Project-Students-Clashes-Database-Normalisations-17a0e5ce0cfb808bafdce37376fad8f4',
      icon: '💡',
      image: null,
      description:
        'Step-by-step SQL database normalisation project resolving student timetable clashes, including ER diagrams and query breakdowns.',
    },
    {
      title: 'Calculator for financial advisors — quick assistance (HTML, CSS & JS)',
      url: 'https://leconsulat2.github.io/average-calculator/',
      icon: '🎨',
      image: null,
      description:
        'Lightweight browser-based calculator built for financial advisors to quickly run average-rate calculations without leaving their workflow.',
    },
    {
      title: "Korea's most popular messenger — visual clone (HTML, CSS)",
      url: 'https://leconsulat2.github.io/kakaotalk_clone_final/',
      icon: '🎨',
      image: null,
      description:
        'Pixel-accurate front-end clone of KakaoTalk\'s chat interface, built with vanilla HTML and CSS to practise UI layout and styling.',
    },
    {
      title: "My Designs - showing the understanding of usages and design principles",
      url: "https://github.com/LeConsulat2/jp-page/blob/master/public/images/MY%20DESIGN.png",
      icon: "🎨",
      image: "/images/MY DESIGN.png",
      description:
        'A collection of my design work demonstrating my understanding of design principles and their applications in various projects.',
    },
    {
      title: "My Designs 2 - showing the understanding of usages and design principles",
      url: "https://github.com/LeConsulat2/jp-page/blob/master/public/images/MY%20DESIGN-2.png",
      icon: "🎨",
      image: "/images/MY DESIGN-2.png",
      description:
        'A collection of my design work demonstrating my understanding of design principles and their applications in various projects.',
    }
  ];

  return NextResponse.json(portfolioLinks);
}
