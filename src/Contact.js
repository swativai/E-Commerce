import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.045997792135!2d75.84127727406722!3d22.800759424571677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963034cdb1c47ed%3A0xfe1b56e683167f50!2z4KS24KS-4KSV4KSu4KWN4KSs4KSw4KWAIOCkheCkteClh-CkqOClgeCkjw!5e0!3m2!1shi!2sin!4v1725345913722!5m2!1shi!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map of Our Office"
      />

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mdknjkqd"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
