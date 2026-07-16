const documentPanel = document.querySelector('#document');
const errorPanel = document.querySelector('#error');
const titleElement = document.querySelector('#document-title');
const metaElement = document.querySelector('#document-meta');
const agreementElement = document.querySelector('#agreement-text');
const printButton = document.querySelector('#print-button');

const readPayload = () => {
  if (!window.location.hash) {
    return null;
  }

  try {
    const payload = JSON.parse(decodeURIComponent(window.location.hash.slice(1)));
    if (
      typeof payload.title !== 'string' ||
      typeof payload.clientCompany !== 'string' ||
      typeof payload.agreement !== 'string'
    ) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
};

const payload = readPayload();

if (payload) {
  document.title = `${payload.title} | LAIRE`;
  titleElement.textContent = payload.title;
  metaElement.textContent = `LAIRE and ${payload.clientCompany}`;
  agreementElement.textContent = payload.agreement;
  documentPanel.hidden = false;
} else {
  printButton.hidden = true;
  errorPanel.hidden = false;
}

printButton.addEventListener('click', () => window.print());

if (payload && new URLSearchParams(window.location.search).get('autoprint') === '1') {
  window.setTimeout(() => window.print(), 500);
}
