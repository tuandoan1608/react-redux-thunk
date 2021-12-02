import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Row from 'react-bootstrap/Row';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
}



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const Profile = () => {
  const classes = useStyles();
  const form = useRef();
  const checkBtn = useRef();
  const { message } = useSelector(state => state.message);
  const [rule, setRule] = useState();
  const [keyword, setKeyword] = useState();
  const [loading, setLoading] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  // const dispatch = useDispatch();






  const onChangeRule = (e) => {
    const rule = e.target.value;
    setRule(rule);
  };

  const onChangeKeyword = (e) => {
    const keyword = e.target.value;
    setKeyword(keyword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  return (

    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <p className="mt-3"> Cloud Nine Solutions</p>
        </div>
        <div className="col-md-2">
          <a href="/logout" className="btn btn-primary mt-3">Logout</a>
        </div>
      </div>
      <hr></hr>
      <div className="inline-group">
        <a href="/list-customer" className="btn btn-primary">List customer</a>
        <a href="/customer" className="btn btn-light">Customer</a>
      </div>
      <hr></hr>
      <div className="bg-info p-1 ">
        <p>Filler customer</p>
      </div>



      <div class="row col-md-6 mt-3">
        <div class="col">
          <p>Sales</p>
        </div>
        <div class="col">
          <select id="inputState" name="sales" class="form-control">
            <option selected>.Choose..</option>

          </select>

        </div>
      </div>
      <Form onSubmit={handleLogin} ref={form}>
        <Row>
          <div className=" pr-3">
            <label htmlFor="username">Customer ID</label>
            <Input
              type="radio"

              name="rule"
              value="1"
              onChange={onChangeRule}
              validations={[required]}
            />
          </div>
          <div className="pr-3">
            <label htmlFor="username">Name</label>
            <Input
              type="radio"

              name="rule"
              value="2"
              onChange={onChangeRule}
              validations={[required]}
            />
          </div>
          <div className=" pr-3">
            <label htmlFor="username">Phone</label>
            <Input
              type="radio"

              name="rule"
              value="3"
              onChange={onChangeRule}
              validations={[required]}
            />
          </div>
          <div className=" pr-3">
            <label htmlFor="username">Address</label>
            <Input
              type="radio"

              name="rule"
              value="4"
              onChange={onChangeRule}
              validations={[required]}
            />
          </div>
          <div className=" pr-3">
            <label htmlFor="username">Email</label>
            <Input
              type="radio"

              name="rule"
              value="5"
              onChange={onChangeRule}
              validations={[required]}
            />
          </div>
        </Row>
        <div className=" pr-3">
          <label htmlFor="password">Keyword</label>
          <Input
            type="text"
            className="form-control"
            name="keyword"
            value={keyword}
            onChange={onChangeKeyword}
            validations={[required]}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-block" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Search</span>
          </button>
        </div>

        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>

    </div>

  );
};

export default Profile;