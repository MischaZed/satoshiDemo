import styled from "styled-components"

export default props => {
  if (props.type === "image") {
    return (
      <Paywall {...props}>
        {props.placeholder && <Image src={props.placeholder} />}
        {props.children}
      </Paywall>
    )
  } else if (props.type === "video") {
    return (
      <Video {...props}>
        {/* <img
          style={{ width: 100, height: 100, opacity: 0.3 }}
          src={`/static/play.png`}
        /> */}
        {props.children}
      </Video>
    )
  } else {
    return (
      <Generic {...props}>
        {props.children}
      </Generic>
    )
  }
}

const Paywall = styled.div`
  margin-bottom: ${props => (props.margin ? "2rem" : "none")};
  position: relative;
  height: ${props => (props.height ? props.height + `px` : "auto")};
  min-width: 200px;
  min-height: 80px;
`

const Image = styled.img`
  height: 100%;
  max-width: 100%;
`

const Video = Paywall.extend`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: url(${props => props.placeholder}) no-repeat center center;
  background-size: cover;
`
const Generic = Paywall.extend`
  background: linear-gradient(#ffeacc 90%, white 0);
  background-size: 100% 20px;
  flex: ${props => (props.flex ? props.flex : 1)};
`
