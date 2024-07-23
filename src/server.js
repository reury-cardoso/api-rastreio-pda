import express from 'express';
import { getItemRouter } from './routes/getItem.js';
import { getAllRouter } from './routes/getAll.js';
import { getCounter } from './routes/getCounter.js';
import { deleteTrackingRouter } from './routes/deleteTracking.js';
import { addTrackingRouter } from './routes/addTracking.js';
import { updateHistoryRouter } from './routes/updateHistory.js';

const app = express();
const port = 3000;
app.use(express.json());

app.use(getItemRouter)
app.use(getAllRouter)
app.use(getCounter)
app.use(deleteTrackingRouter)
app.use(addTrackingRouter)
app.use(updateHistoryRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})