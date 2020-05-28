import * as React from 'react';
import './HomePage.css';
import Form from 'react-bootstrap/Form';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import APIClient from '../services/APIClient';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

/* eslint-disable */

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const StyledButton = withStyles({
    root: {
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
        boxShadow: '0 3px 15px 2px rgba(33, 203, 243, 0.5)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function HomePage() {
    const classes = useStyles();

    // Create state variables
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [responseData, setResponseData] = React.useState('');

    // fetches data
    const fetchData = () => {
        //e.preventDefault()
        APIClient.getData()
            .then((response) => {
                if (response.status === 200) {
                    setOpen(true);
                    setResponseData(response.data);
                    console.log(response);
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleChange = (event, child) => {
        if (event.target.value != null) {
            fetchData();
        }
        setAge(event.target.value);
    };

    // Sample data - TODO this has to be retrived via service.
    const fileStatus = {
        data: [
            { name: 'sla miss', value: 50, label: '50%' },
            { name: 'sla met', value: 30, label: '30%' },
            { name: 'sla miss', value: 20, label: '20%' }
        ],
        width: 400,
        height: 300,
        innerRadius: 60,
        outerRadius: 100
    }

    const POSSLA = {
        data: [
            { name: 'POS miss', value: 70, label: '70%' },
            { name: 'POS miss', value: 28, label: '28%' },
            { name: 'POS miss', value: 2, label: '2%' }
        ],
        width: 400,
        height: 300,
        innerRadius: 60,
        outerRadius: 100
    }

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent, index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <React.Fragment>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Data loaded successfully
                </Alert>
            </Snackbar>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Vendors</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                onChange={handleChange}
                                className={classes.selectEmpty}>
                                <MenuItem value="" disabled>Select Vendor from the list</MenuItem>
                                <MenuItem value={10}>DAS Auto communications</MenuItem>
                                <MenuItem value={20}>Volkswagon Automobile service</MenuItem>
                                <MenuItem value={30}>Lantrasoft solutions</MenuItem>
                            </Select>
                            <FormHelperText>Placeholder</FormHelperText>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="container-fluid">
                <div className="row min-height-px">
                    <div className="col-md-6 text-align-center vertical-line">
                        <h4 align="center" className="heading">VENDOR SLA</h4>
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart height={400}>
                                <Pie
                                    data={fileStatus.data}
                                    innerRadius={60}
                                    outerRadius={150}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                >
                                    {
                                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                    }
                                </Pie>
                                <Legend verticalAlign="bottom" height={36} />
                                <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="col-md-6 text-align-center">
                        <h4 align="center" className="heading">POS SLA</h4>
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart height={400}>
                                <Pie
                                    data={POSSLA.data}
                                    innerRadius={60}
                                    outerRadius={150}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                >
                                    {
                                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                    }
                                </Pie>
                                <Legend verticalAlign="bottom" height={36} />
                                <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <hr className="horizontalline" />
                <div className="row min-height-px">
                    <div className="col-md-6 text-align-center vertical-line">
                        <h4 align="center" className="heading">FILE STATUS</h4>
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart height={400}>
                                <Pie
                                    data={fileStatus.data}
                                    innerRadius={60}
                                    outerRadius={150}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                >
                                    {
                                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                    }
                                </Pie>
                                <Legend verticalAlign="bottom" height={36} />
                                <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="col-md-6 text-align-center">
                        <h4 align="center" className="heading">FILE REPROCESSING</h4>
                        {/* TODO - This has to be a component */}
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Select File(s)</Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>INF_IN01_RLTR_SALES_315692_D_2020021</option>
                                    <option>INF_IN01_RLTR_SALES_315692_D_2020021</option>
                                    <option>INF_IN01_RLTR_SALES_315692_D_2020021</option>
                                    <option>INF_IN01_RLTR_SALES_315692_D_2020021</option>
                                    <option>INF_IN01_RLTR_SALES_315692_D_2020021</option>
                                </Form.Control>
                            </Form.Group>
                            <StyledButton onClick={e => fetchData(e)}>Reprocess</StyledButton>
                        </Form>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}
