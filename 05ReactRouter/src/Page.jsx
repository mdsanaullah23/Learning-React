import React, { useEffect } from 'react';

function Page({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]); 

  return (
    <div>
      {}
    </div>
  );
}

export default Page;