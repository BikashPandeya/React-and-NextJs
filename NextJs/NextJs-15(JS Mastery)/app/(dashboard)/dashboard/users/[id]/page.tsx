import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

// No need to make it `async` unless you're using `await` inside
const Page =async ({ params }: PageProps) => {
  const { id } =await params;


  return (
    <div>
      Inside dynamic route which is inside users inside dashboard: {id}
    </div>
  );
};

export default Page;
