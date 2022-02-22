import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import styles from './common.module.scss'

type Props = {
    isRemove: boolean
    onClick?: () => void
}

const PlusMinusButton = (props: Props) => {
    return (
        <Button className={props.isRemove ? styles.errorButton : styles.successButton} onClick={props.onClick}>
            {props.isRemove ? <RemoveIcon /> : <AddIcon />}
        </Button>
    )
}

export default PlusMinusButton