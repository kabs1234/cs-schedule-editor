import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Chip,
  Divider,
  useTheme,
} from '@mui/material';
import type { ReactElement } from 'react';

export default function ScheduleItem({
  title,
  startDate,
  endDate,
}: {
  title: string;
  startDate: string;
  endDate: string;
}): ReactElement {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              fontSize: '1.1rem',
            }}
          >
            {title}
          </Typography>
        }
        sx={{
          pb: 1,
          '& .MuiCardHeader-content': {
            overflow: 'hidden',
          },
        }}
      />

      <Divider sx={{ mx: 2 }} />

      <CardContent sx={{ padding: '8px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                color: theme.palette.text.primary,
              }}
            >
              {startDate}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                mx: 0.5,
              }}
            >
              —
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                color: theme.palette.text.primary,
              }}
            >
              {endDate}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 3,
            pt: 2,
            borderTop: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              Duration:
            </Typography>
          </Box>
          <Chip
            label="Duration"
            size="small"
            sx={{
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.contrastText,
              fontWeight: 500,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
