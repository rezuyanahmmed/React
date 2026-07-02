// import React from 'react';

const BlogDetailPage = async ({ params }) => {
  const {blogId} = await params;
  console.log('show params', blogId);
  return (
    <div>
      <h4 className='text-2xl'>Blog details comming soon</h4>
    </div>
  );
};

export default BlogDetailPage;