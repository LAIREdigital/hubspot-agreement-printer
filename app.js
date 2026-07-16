const documentPanel = document.querySelector('#document');
const errorPanel = document.querySelector('#error');
const titleElement = document.querySelector('#document-title');
const metaElement = document.querySelector('#document-meta');
const agreementElement = document.querySelector('#agreement-text');
const printButton = document.querySelector('#print-button');
const searchParams = new URLSearchParams(window.location.search);
const autoPrint = searchParams.get('autoprint') === '1';

const readPayload = () => {
  try {
    const queryPayload = searchParams.get('data');
    const hashPayload = window.location.hash.slice(1);
    const payload = queryPayload
      ? JSON.parse(queryPayload)
      : hashPayload
        ? JSON.parse(decodeURIComponent(hashPayload))
        : null;

    if (!payload) {
      return null;
    }

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

if (searchParams.has('data')) {
  window.history.replaceState(null, '', window.location.pathname);
}

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

if (payload && autoPrint) {
  window.setTimeout(() => window.print(), 500);
}
