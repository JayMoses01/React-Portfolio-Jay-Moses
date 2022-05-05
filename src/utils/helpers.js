export function validateName(name) {
  const nameCheck = /^[a-z ,.'-]+$/i;
  return nameCheck.test(String(name));
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

export function validateMessage(message) {
  const msg = /./;
  return msg.test(String(message));
}
