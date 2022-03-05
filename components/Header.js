import Image from 'next/image'
const Header = () => {
  return (
    <>
      <h1>This is header</h1>

      <Image
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        width={200}
        height={100}
      />
    </>
  );
}

export default Header