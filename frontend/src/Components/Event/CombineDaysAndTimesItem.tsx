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
import { dateToString, timeToString, timeTupleToString } from '../Common/StaticFunctions';

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

const getTimeStringsArray = (inp: Array<{ time: Array<Date>, id: number }>): Array<{ text: string, id: number }> => {
    const output: Array<{ text: string, id: number }> = []
    inp.forEach((value) => {
        output.push({ text: timeTupleToString(value.time), id: value.id })
    })
    return output
}

const CombineDaysAndTimesItem = (props: Props) => {
    const [checked, setChecked] = React.useState<Array<{ text: string, id: number }>>([]);
    const [left, setLeft] = React.useState<Array<{ text: string, id: number }>>(getTimeStringsArray(props.times));
    const [right, setRight] = React.useState<Array<{ text: string, id: number }>>([]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

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
        setRight(right.concat(left));
        setLeft([]);
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };

    const customList = (items: any, isLeft: boolean) => (
        <Paper sx={{ overflow: 'auto' }} className={styles.dateTimeCombineContainer}>
            <Typography variant="caption">{isLeft ? "Nicht verwenden" : "Verwenden"}</Typography>
            <List dense component="div" role="list">
                {items.map((value: { text: string, id: number }) => {
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
    console.log("lalalla")
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