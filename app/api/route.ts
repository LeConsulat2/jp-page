import { NextResponse } from 'next/server';

export async function GET() {
  const portfolioLinks = [
    {
      title: 'Excel Reports & Dashboards',
      url: 'https://onedrive.live.com/?id=D35BD98C5FB12BF6%21s7096425c5f544c9e812641df5d5e7df0&cid=D35BD98C5FB12BF6',
      icon: '📊',
    },
    {
      title: 'Ronacorona Dashboards Using Python',
      url: 'https://leconsulat2-ronacorona-dashboard-v2-main-bp7cp3.streamlit.app/',
      icon: '📈',
    },
    {
      title: 'Python-GPT Using Python',
      url: 'https://leconsulat2-fullstack-gpt-home-yuvpqy.streamlit.app/',
      icon: '🤖',
    },
    {
      title: 'HTML&CSS Students Canvas Clone',
      url: 'https://leconsulat2.github.io/canvas-clone/',
      icon: '🎨',
    },
  ];
  return NextResponse.json(portfolioLinks);
}
