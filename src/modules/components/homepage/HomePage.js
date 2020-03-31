import * as React from 'react';
import './HomePage.css';
import Piechart from '../visualization/PieChart';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import APIClient from '../services/APIClient';
import logger from '../../Logger';

class HomePage extends React.Component {
    componentDidMount () {
        // TODO: This is a sample GET using axios
        // Need to replace with original API calls
        console.log('List', APIClient.query(process.env.SAMPLE_API));
    }

    // Sample data - TODO this has to be retrived via service.
    fileStatus = {
        data: [
            { value: 50, label: '50%' },
            { value: 30, label: '30%' },
            { value: 20, label: '20%' }
        ],
        width: 400,
        height: 300,
        innerRadius: 60,
        outerRadius: 100
    }

    POSSLA = {
        data: [
            { value: 70, label: '70%' },
            { value: 28, label: '28%' },
            { value: 2, label: '2%' }
        ],
        width: 400,
        height: 300,
        innerRadius: 60,
        outerRadius: 100
    }

    render () {
        console.log('Home page', process.env.HOST, process.env.SAMPLE_API);
        logger.info("This", "meta");
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <h4 align="center">File Status</h4>
                            <Piechart
                                width={this.fileStatus.width}
                                height={this.fileStatus.height}
                                innerRadius={this.fileStatus.innerRadius}
                                outerRadius={this.fileStatus.outerRadius}
                                data={this.fileStatus.data} />
                        </div>
                        <div className="verticalline col-sm-1 col-md-1 col-lg-1"/>
                        <div className="col-sm-5 col-md-5 col-lg-5">
                            <h4 align="center">POS SLA</h4>
                            <Piechart
                                width={this.POSSLA.width}
                                height={this.POSSLA.height}
                                innerRadius={this.POSSLA.innerRadius}
                                outerRadius={this.POSSLA.outerRadius}
                                data={this.POSSLA.data} />
                        </div>
                    </div>

                    <hr className="horizontalline"/>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <h4 align="center">File Reprocessing</h4>
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
                                <Button variant="primary" type="submit">
                                    Reprocess
                                </Button>
                            </Form>
                        </div>
                        <div className="verticalline col-sm-1 col-md-1 col-lg-1"/>
                        <div className="col-sm-5 col-md-5 col-lg-5">
                            <h4 align="center">Administrative Actions</h4>

                            <Button variant="primary" size="lg" block>
                                Detailed File Processing status
                            </Button>
                            <Button variant="primary" size="lg" block>
                                View Notification(s)
                            </Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default HomePage;
