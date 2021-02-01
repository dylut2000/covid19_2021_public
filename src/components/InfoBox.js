import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const InfoBox = ({ title, cases, total }) => {
  return (
    <Card className='infoBox'>
      <CardContent>
        <Typography color='textSecondary' className='infoBox__title'>{title}</Typography>
        <h2 className='infoBox__cases'>{cases}</h2>
        <Typography color='textSecondary' className='infoBox__total'>{total} total</Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
