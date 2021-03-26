import * as React from 'react';
import { ForecastDay } from '../../business-rules/forecast/data';
import { UpcomingDaysList } from './UpcomingDaysList';
import { UpcomingDaysNav } from './UpcomingDaysNav';
import { Pagination } from './types';
import './UpcomingDays.css';

interface Props {
  days: ForecastDay[];
}

const MAX_PER_PAGE = 6;

export function UpcomingDays({ days }: Props) {
  const container = React.createRef<HTMLDivElement>();
  const [pagination, setPagination] = React.useState<Pagination>({
    currentPage: 1,
    totalItems: 12,
    itemsPerPage: MAX_PER_PAGE,
    totalPages: 2,
  });
  const [pages, setPages] = React.useState<ForecastDay[][]>([]);

  const [navPosition, setNavPosition] = React.useState('0');

  React.useEffect(() => {
    const newPages = Array.from(
      { length: pagination.totalPages },
      (_, index) => {
        const initAt = index * MAX_PER_PAGE;
        return days.slice(initAt, initAt + MAX_PER_PAGE);
      }
    );

    setPages(newPages);
  }, [days, pagination.totalPages]);

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
        {pages.map((pageDays, index) => (
          <UpcomingDaysList days={pageDays} key={`upcoming-${index}`} />
        ))}
      </div>
      <UpcomingDaysNav pagination={pagination} onPageChange={onPageChange} />
    </div>
  );
}
