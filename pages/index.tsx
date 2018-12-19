import { Header } from "../components/organisms/Header";
import { Input } from "../components/atoms/Input";
import { Button } from "../components/atoms/Button";
import { Container } from "../components/atoms/Container";

export default () => (
  <div>
    <Header />
    <Container>
      <Input
        label="Username"
        placeholder="bukan nama asli"
        background="yellow"
      />
      <br />
      <Input label="password" placeholder="rahasia" background="yellow" />
      <br />
      <Button background="green">Login</Button>
      <h2>{process.env.TEST}</h2>
    </Container>
  </div>
);
