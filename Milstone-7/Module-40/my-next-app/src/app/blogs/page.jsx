import React from 'react';

const BlogsPage = () => {

  const blogData = [
  {
    id: 1,
    title: "The Future of Web Development: Trends in 2026",
    slug: "future-of-web-development-2026",
    author: "Rakib Hasan",
    publishedDate: "2026-06-15",
    readingTime: "5 min read",
    tags: ["Web Dev", "AI", "Tech"],
    summary: "A brief discussion on how AI and edge computing are bringing major changes to the world of web development in 2026.",
    content: "AI tools are now helping not only in writing code but also in designing system architectures..."
  },
  {
    id: 2,
    title: "JavaScript Complete Roadmap for Beginners",
    slug: "javascript-roadmap-for-beginners",
    author: "Anika Rahman",
    publishedDate: "2026-05-20",
    readingTime: "8 min read",
    tags: ["JavaScript", "Programming", "Education"],
    summary: "Want to step into the world of programming? Here is a complete roadmap to get started with JavaScript.",
    content: "The first step to learning JavaScript is to thoroughly understand its basic concepts like variables, functions, and loops..."
  },
  {
    id: 3,
    title: "Cyber Security: How to Keep Your Digital Accounts Safe",
    slug: "cyber-security-tips-2026",
    author: "Tanvir Ahmed",
    publishedDate: "2026-07-01",
    readingTime: "6 min read",
    tags: ["Security", "Privacy", "Internet"],
    summary: "5 effective tips to protect your passwords and personal information from online scams and hacking.",
    content: "Using Two-Factor Authentication (2FA) is no longer optional; it is essential for your account security..."
  },
  {
    id: 4,
    title: "React vs Vue: Which One to Choose in 2026?",
    slug: "react-vs-vue-in-2026",
    author: "Saima Akter",
    publishedDate: "2026-04-12",
    readingTime: "10 min read",
    tags: ["React", "Vue", "Frontend"],
    summary: "A comparative analysis between React and Vue in the current frontend development market and which one is best for you.",
    content: "Choosing between React and Vue should depend on your project size and your team's expertise..."
  }
];

  return (
    <div>
      <h2 >Blogs</h2>
    </div>
  );
};

export default BlogsPage;