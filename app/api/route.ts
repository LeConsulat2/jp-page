import { NextResponse } from 'next/server';

export async function GET() {
  const portfolioLinks = [
    {
      title: 'M&A Trends Report (2018-2022)',
      url: 'https://onedrive.live.com/personal/d35bd98c5fb12bf6/_layouts/15/Doc.aspx?resid=D35BD98C5FB12BF6!s3d4d2dca8a9b4fdfa0c5f2f8ea5ebea0&cid=d35bd98c5fb12bf6&migratedtospo=true&app=Excel',
      icon: '📊',
    },
    {
      title:
        'SQL Project- Students Timetable Clashes Normalisation & my thought process',
      url: 'https://www.notion.so/SQL-Project-Students-Database-Normalisations-17a0e5ce0cfb808bafdce37376fad8f4?pvs=4',
      icon: '💻',
    },
    {
      title: 'Finance Dashboard (MyBank)',
      url: 'https://onedrive.live.com/personal/d35bd98c5fb12bf6/_layouts/15/Doc.aspx?resid=D35BD98C5FB12BF6!sc35c4a88d75b4e9481173edf9774f3e3&cid=d35bd98c5fb12bf6&migratedtospo=true&app=Excel',
      icon: '💹',
    },
    {
      title: 'Customer Behavior Insights',
      url: 'https://onedrive.live.com/personal/d35bd98c5fb12bf6/_layouts/15/Doc.aspx?resid=D35BD98C5FB12BF6!sb791e48f8456402ba81e52ce73e1fa08&cid=d35bd98c5fb12bf6&migratedtospo=true&app=Excel',
      icon: '📊',
    },
    {
      title: 'Domestic & International Student Application Rates (2022-2023)',
      url: 'https://onedrive.live.com/personal/d35bd98c5fb12bf6/_layouts/15/Doc.aspx?resid=D35BD98C5FB12BF6!s62bf99fed6844ff98b62d91f76bc6706&cid=d35bd98c5fb12bf6&migratedtospo=true&app=Excel',
      icon: '📈',
    },
    {
      title: 'Global Employee Metrics & Performances',
      url: 'https://onedrive.live.com/personal/d35bd98c5fb12bf6/_layouts/15/Doc.aspx?resid=D35BD98C5FB12BF6!s2c7e4b5207e84b858d4453821b77fea3&cid=d35bd98c5fb12bf6&migratedtospo=true&app=Excel',
      icon: '🌍',
    },

    {
      title: 'View All Projects including HTML & CSS works',
      url: 'https://jp-personal.my.canva.site/',
      icon: '🎨',
    },
  ];

  return NextResponse.json(portfolioLinks);
}
