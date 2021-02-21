import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  rate: '0.00',
}

export const initialInvoice: Invoice = {
  title: 'INVOICE',
  companyName: 'Nic Pismiris',
  name: 'Nicolas A Pismiris',
  companyAddress: 'PO Box 231',
  companyAddress2: 'Cottesloe, 6911',
  companyCountry: 'Australia',
  billTo: 'Bill To:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'Australia',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: 'Website Design',
      quantity: '2',
      rate: '50.00',
    },
  ],
  subTotalLabel: 'Sub Total',
  taxLabel: 'Sale Tax (0%)',
  totalLabel: 'TOTAL',
  currency: '$',
  notesLabel: 'Notes',
  notes: `Bank: Bendigo and Adelaide Bank Ltd
BSB Number: 633-123
Account Number: 164 609 109`,
  termLabel: 'Terms & Conditions',
  term: 'Terms of payment are strictly net 14 days from invoice date.',
}
