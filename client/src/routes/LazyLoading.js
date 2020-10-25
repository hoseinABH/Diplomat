import React, { lazy, Suspense } from 'react';

const Lazyloading = (importFunc, { fallback = null }) => {
  const LazyComponent = lazy(importFunc);
  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

Lazyloading.defaultProps = {
  fallback: null,
};

export default Lazyloading;
