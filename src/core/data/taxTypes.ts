import TaxType from "../models/codeTables/taxType";

const TaxTypes: TaxType[] = [
  {
    "code": "01",
    "description": "Sales Tax"
  },
  {
    "code": "02",
    "description": "Service Tax"
  },
  {
    "code": "03",
    "description": "Tourism Tax"
  },
  {
    "code": "04",
    "description": "High-Value Goods Tax"
  },
  {
    "code": "05",
    "description": "Sales Tax on Low Value Goods"
  },
  {
    "code": "06",
    "description": "Not Applicable"
  },
  {
    "code": "E",
    "description": "Tax exemption (where applicable)"
  }
];

export default TaxTypes;