import Form from "./components/Layout/Form";

function App() {
  const list = [
    {
      listItem:
        "Send all traffic to https://www.instagram.com/p/jjdcjhcbjewgffge",
    },
    {
      listItem:
        "Send all traffic to https://www.instagram.com/p/jjdcjhcbjewgffge",
    },
    {
      listItem:
        "Send 40% traffic to https://www.instagram.com/p/jjdcjhcbjewgffge",
    },
    {
      listItem1:
        "Send 40% traffic to https://www.instagram.com/p/jjdcjhcbjewgffge",
    },
  ];
  return (
    <>
      {/* all form collection. just pic one and place it where need to be used  */}

      <Form>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Send all traffic to{" "}
          <a
            href="https://www.instagram.com/p/jjdcjhcbjewgffge"
            className="text-[#5BDB8A] ml-1"
          >
            https://www.instagram.com/p/jjdcjhcbjewgffge
          </a>{" "}
        </li>
      </Form>

      {/* link rotation  */}
      <Form>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Send 40% traffic to
          <a
            href="https://www.instagram.com/p/jjdcjhcbjewgffge"
            className="text-[#5BDB8A] ml-1"
          >
            https://www.instagram.com/p/jjdcjhcbjewgffge
          </a>{" "}
        </li>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Send the rest to
          <a
            href="https://www.instagram.com/p/jjdcjhcbjewgffge"
            className="text-[#5BDB8A] ml-1"
          >
            https://www.instagram.com/p/jjdcjhcbjewgffge
          </a>{" "}
        </li>
      </Form>

      {/* block boats  */}

      <Form>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Send all traffic to
          <a
            href="https://www.instagram.com/p/jjdcjhcbjewgffge"
            className="text-[#5BDB8A] ml-1"
          >
            https://www.instagram.com/p/jjdcjhcbjewgffge
          </a>{" "}
        </li>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Known bots will not be permitted to follow this link & bot traffic
          will not be recorded.
        </li>
      </Form>

      {/* link clocking  */}

      <Form>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Send all traffic to
          <a
            href="https://www.instagram.com/p/jjdcjhcbjewgffge"
            className="text-[#5BDB8A] ml-1"
          >
            https://www.instagram.com/p/jjdcjhcbjewgffge
          </a>{" "}
        </li>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          The link has clocking feature
          <a href="https://p/jjdcjhcbjewgffge" className="text-[#5BDB8A] ml-1">
            https://p/jjdcjhcbjewgffge
          </a>{" "}
        </li>
      </Form>

      {/* link encryption  */}
      <Form>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Send all traffic to
          <a
            href="https://www.instagram.com/p/jjdcjhcbjewgffge"
            className="text-[#5BDB8A] ml-1"
          >
            https://www.instagram.com/p/jjdcjhcbjewgffge
          </a>{" "}
        </li>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Link encryption is enabled :{" "}
          <span className="font-bold">ASDF12354</span>
        </li>
      </Form>

      {/* bot detection  */}
      <Form>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Send all traffic to
          <a
            href="https://www.instagram.com/p/jjdcjhcbjewgffge"
            className="text-[#5BDB8A] ml-1"
          >
            https://www.instagram.com/p/jjdcjhcbjewgffge
          </a>{" "}
        </li>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Bot detection is enabled for your link
        </li>
      </Form>

      {/* all features  */}
      <Form>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Send 40% traffic to
          <a
            href="https://www.instagram.com/p/jjdcjhcbjewgffge"
            className="text-[#5BDB8A] ml-1"
          >
            https://www.instagram.com/p/jjdcjhcbjewgffge
          </a>{" "}
        </li>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Send the rest to
          <a
            href="https://www.instagram.com/p/jjdcjhcbjewgffge"
            className="text-[#5BDB8A] ml-1"
          >
            https://www.instagram.com/p/jjdcjhcbjewgffge
          </a>{" "}
        </li>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          The link has clocking feature
          <a href="https://p/jjdcjhcbjewgffge" className="text-[#5BDB8A] ml-1">
            https://p/jjdcjhcbjewgffge
          </a>{" "}
        </li>

        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Link encryption is enabled :{" "}
          <span className="font-bold">ASDF12354</span>
        </li>
        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Known bots will not be permitted to follow this link & bot traffic
          will not be recorded.
        </li>

        <li className="text-[#414141] font-primary font-normal text-base listStyle">
          {" "}
          Bot detection is enabled for your link
        </li>
      </Form>
    </>
  );
}

export default App;
