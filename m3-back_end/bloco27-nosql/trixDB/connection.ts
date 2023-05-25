import { connect } from 'mongoose';

const options = {
  user: 'user',
  pass: 'password',
  dbName: 'trixDB',
};

connect('mongodb://localhost:27017/', options);