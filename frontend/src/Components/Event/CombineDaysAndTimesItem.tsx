import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import styles from './event.module.scss';
import { Typography } from '@mui/material';
import { dateToString, timeTupleToString } from '../Common/StaticFunctions';
import { useDispatch } from 'react-redux';
import { add, remove } from '../../Actions/CombinedDayTimeAction';

type Props = {
    date: Date,
    times: Array<{ time: Array<Date>, id: number }>
}

const not = (a: any, b: any) => {
    return a.filter((value: any) => b.indexOf(value) === -1);
}

const intersection = (a: any, b: any) => {
    return a.filter((value: any) => b.indexOf(value) !== -1);
}

const getTimeStringsArray = (inp: Array<{ time: Array<Date>, id: number }>): Array<{ text: string, id: number, start: Date, end: Date }> => {
    const output: Array<{ text: string, id: number, start: Date, end: Date }> = []
    inp.forEach((value) => {
        output.push({ text: timeTupleToString(value.time), id: value.id, start: value.time[0], end: value.time[1] })
    })
    return output
}



const CombineDaysAndTimesItem = (props: Props) => {
    const [checked, setChecked] = React.useState<Array<{ text: string, id: number, start: Date, end: Date }>>([]);
    const [left, setLeft] = React.useState<Array<{ text: string, id: number, start: Date, end: Date }>>(getTimeStringsArray(props.times));
    const [right, setRight] = React.useState<Array<{ text: string, id: number, start: Date, end: Date }>>([]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const dispatch = useDispatch()

    const handleToggle = (value: any) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleAllRight = () => {
        left.forEach(item => dispatch(add({ date: props.date, start: item.start, end: item.end, id: item.id })))
        setRight(right.concat(left));
        setLeft([]);

    };

    const handleCheckedRight = () => {
        leftChecked.forEach((item: { text: string, id: number, start: Date, end: Date }) => dispatch(add({ date: props.date, start: item.start, end: item.end, id: item.id })))
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        rightChecked.forEach((item: { text: string, id: number, start: Date, end: Date }) => dispatch(remove(item.id)))
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
        right.forEach(item => dispatch(remove(item.id)))
        setLeft(left.concat(right));
        setRight([]);
    };

    const customList = (items: any, isLeft: boolean) => (
        <Paper sx={{ overflow: 'auto' }} className={styles.dateTimeCombineContainer}>
            <Typography variant="caption">{isLeft ? "Nicht verwenden" : "Verwenden"}</Typography>
            <List dense component="div" role="list">
                {items.map((value: { text: string, id: number, start: Date, end: Date }) => {
                    const labelId = `transfer-list-item-${value}-label`;

                    return (
                        <ListItem
                            key={value.id}
                            role="listitem"
                            button
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value.text} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Paper>
    );

    return (
        <Paper className={styles.dateTimeCombineContainer}>
            <Typography variant="h6">{dateToString(props.date)}</Typography>
            <Grid container spacing={2} justifyContent="center" alignItems="center" >
                <Grid item>{customList(left, true)}</Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="center">
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleAllRight}
                            disabled={left.length === 0}
                            aria-label="move all right"
                        >
                            ≫
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedRight}
                            disabled={leftChecked.length === 0}
                            aria-label="move selected right"
                        >
                            &gt;
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedLeft}
                            disabled={rightChecked.length === 0}
                            aria-label="move selected left"
                        >
                            &lt;
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleAllLeft}
                            disabled={right.length === 0}
                            aria-label="move all left"
                        >
                            ≪
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>{customList(right, false)}</Grid>
            </Grid>
        </Paper>
    );
}

export default CombineDaysAndTimesItem;