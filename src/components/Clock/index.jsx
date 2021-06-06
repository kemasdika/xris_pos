import React from 'react';
import { Typography } from '@material-ui/core';

export default function TickingClock() {
    const [state, setState] = React.useState({
        time: new Intl.DateTimeFormat(
            'en-US',
            {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',

            }
        ).format(new Date()).toLocaleString()
    });



    React.useEffect(() => {
        const tick = () => {
            setState({
                time: new Intl.DateTimeFormat(
                    'en-US',
                    {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',

                    }
                ).format(new Date()).toLocaleString()
            });
        }

        const intervalID = setInterval(
            () => tick(),
            1000
        );
        return () => {
            clearInterval(intervalID);
        }
    }, [])


    return (
        <div>
            <Typography
                className="App-clock"
                color="textPrimary"
                style={{
                    fontSize: '14px',
                    spacing: 0,
                    textTransform: 'capitalize'
                }}
            >
                {`${state.time}`}
            </Typography>
        </div>
    );
}