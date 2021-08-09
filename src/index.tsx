import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction:  Model, 
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário',
          type: 'deposit',
          category: 'Salário',
          amount: 6000,
          createdAt: new Date('2021-08-05 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-08-06 09:00:00')
        },
        {
          id: 3,
          title: 'Supermercado',
          type: 'withdraw',
          category: 'Compras',
          amount: 1100,
          createdAt: new Date('2021-08-06 09:00:00')
        },
        {
          id: 4,
          title: 'Farmácia',
          type: 'withdraw',
          category: 'Compras',
          amount: 150,
          createdAt: new Date('2021-08-07 09:00:00')
        },
        {
          id: 5,
          title: 'Restaurante',
          type: 'withdraw',
          category: 'Outros',
          amount: 200,
          createdAt: new Date('2021-08-07 09:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);