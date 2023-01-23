// @mui
import PropTypes from 'prop-types';
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from '@mui/lab';
// ----------------------------------------------------------------------

Education.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function Education({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent
        sx={{
          '& .MuiTimelineItem-missingOppositeContent:before': {
            display: 'none',
          },
        }}
      >
        <Timeline>
          {list.map((item, index) => (
            <EducationItem key={item.id} item={item} isLast={index === list.length - 1} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

EducationItem.propTypes = {
  isLast: PropTypes.bool,
  item: PropTypes.shape({
    time: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    type: PropTypes.string,
  }),
};

function EducationItem({ item, isLast }) {
  const { priority, title, school, year_start, year_end, description } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (priority.toString() === '2' && 'primary') ||
            (priority.toString() === '1' && 'success') ||
            (priority.toString() === '3' && 'warning') ||
            'error'
          }
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle2">{title} - {school}</Typography>

        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {year_start} - {year_end} |
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          | {description}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
