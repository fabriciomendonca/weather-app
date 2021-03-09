import * as React from 'react';
import { IconNames } from '../../Icon';
import { IconButton } from '../../IconButton';
import { Pagination } from '../types';
import './UpcomingDaysNav.css';

interface Props {
  pagination: Pagination;
  onPageChange: (page: number) => void;
}

export function UpcomingDaysNav({ pagination, onPageChange }: Props) {
  const [hasPrevious, setHasPrevious] = React.useState(true);
  const [hasNext, setHasNext] = React.useState(true);

  React.useEffect(() => {
    if (pagination) {
      setHasPrevious(pagination.currentPage > 1);
      setHasNext(pagination.currentPage < pagination.totalPages);
    }
  }, [pagination]);

  return (
    <div className="UpcomingDaysNav">
      <IconButton
        iconName={IconNames.DIRECTION_LEFT}
        disabled={!hasPrevious}
        onClick={() => onPageChange(pagination.currentPage - 1)}
      />
      <IconButton
        iconName={IconNames.DIRECTION_RIGHT}
        disabled={!hasNext}
        onClick={() => onPageChange(pagination.currentPage + 1)}
      />
    </div>
  );
}
