import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PosSlaMisses from './POS-SLA-Miss/posSlaMiss';
import MissingFiles from './MISSINGFILES/missingFiles';
import LongRunningSkippedFiles from './LONGRUNNINGSKIPPEDFILES/longRunningSkippedFiles';
import HeldCorruptedSkippedFiles from './HELDCORRUPTEDFILES/heldCorruptedSkippedFiles';

/* eslint-disable */
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBarBackground: {
        background: '#212121',
    }
}));

export default function Notifications() {
    const classes = useStyles();
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <AppBar position="static" className={classes.appBarBackground}>
                            <Toolbar>
                                <Typography variant="h6" className={classes.title}>
                                    POS SLA Misses
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <PosSlaMisses />
                    </div>
                    <div className="col-md-6">
                        <MissingFiles />
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <AppBar position="static" className={classes.appBarBackground}>
                            <Toolbar>
                                <Typography variant="h6" className={classes.title}>
                                    Long Running / skipped
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <LongRunningSkippedFiles />
                    </div>
                    <div className="col-md-6">
                        <HeldCorruptedSkippedFiles />
                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </Fragment>
    );
}
