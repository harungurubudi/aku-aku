import { Header } from "../components/organisms/Header";
import { Input } from "../components/atoms/Input";
import { Button } from "../components/atoms/Button";

export default () => (
  <div>
    <Header />
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 10px" }}>
      <Input
        label="Username"
        placeholder="bukan nama asli"
        background="yellow"
      />
      <br />
      <Input label="password" placeholder="rahasia" background="yellow" />
      <br />
      <Button background="green">Login</Button>
    </div>
  </div>
);
