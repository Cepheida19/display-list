import { createSlice } from '@reduxjs/toolkit';

type Data = {
  id: string;
  name: string;
  email: string;
  phone: string;
}

type DataState = {
  list: Data[];
}

const initialState: DataState = {
  list: [{
    id: '1',
    name: 'Иванов Иван Иванович',
    email: 'ivanov@ivan.ivan',
    phone: '+70000000000',
  },
  {
    id: '2',
    name: 'Петров Петр Петрович',
    email: 'petrov@petr.petr',
    phone: '+70000000001',
  },
  {
    id: '3',
    name: 'Сидоров Сергей Сергеевич',
    email: 'sidorov@sidor.sidor',
    phone: '+70000000002',
  }],
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

export default dataSlice.reducer;