import { Typography } from '@mui/material'
import React from 'react'
import styles from './common.module.scss'

type Props = {
    text: string
}

const PaperHeadline = (props: Props) => {
    return (
        <div className={styles.paperHeadline}>
            <Typography variant="h4">
                {props.text}
            </Typography>
        </div>
    )
}

export default PaperHeadline