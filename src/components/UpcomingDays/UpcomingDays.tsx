import * as React from 'react';
import { UpcomingDaysList } from './UpcomingDaysList';
import { UpcomingDaysNav } from './UpcomingDaysNav';
import { Pagination } from './types';
import './UpcomingDays.css';

const MAX_PER_PAGE = 6;

export function UpcomingDays() {
  const container = React.createRef<HTMLDivElement>();
  const [pagination, setPagination] = React.useState<Pagination>({
    currentPage: 1,
    totalItems: 12,
    itemsPerPage: MAX_PER_PAGE,
    totalPages: 2,
  });

  const [navPosition, setNavPosition] = React.useState('0');

  const onPageChange = (page: number) => {
    setPagination({
      ...pagination,
      currentPage: page,
    });

    const px = (page - 1) * (container.current?.clientWidth || 0);
    const rem = (page - 1) * 3.75;

    setNavPosition(`-${px}px - ${rem}rem`);
  };

  return (
    <div className="UpcomingDays" ref={container}>
      <h2>Upcoming days</h2>
      <div
        className="UpcomingDays-blocks"
        style={{ left: `calc(${navPosition})` }}
      >
        <UpcomingDaysList />
        <UpcomingDaysList />
      </div>
      <UpcomingDaysNav pagination={pagination} onPageChange={onPageChange} />
    </div>
  );
}
