import { Container } from './styles';
import { TransactionsTable } from '../TransactionsTable';
import { Summary } from '../Summary';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}