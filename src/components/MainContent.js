// MainContent.js

import React, { Suspense, lazy } from 'react';

const LazyChart = lazy(() => import('./Chart'));
const LazyTable = lazy(() => import('./Table'));
const LazyCalendar = lazy(() => import('./Calendar'));
const LazyKanbanBoard = lazy(() => import('./KanbanBoard'));

const MainContent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyChart />
      <LazyTable />
      <LazyCalendar />
      <LazyKanbanBoard />
    </Suspense>
  );
};

export default MainContent;
