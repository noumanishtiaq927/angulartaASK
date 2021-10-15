export interface IAirTable {
  records: Record[];
}

export interface Record {
  id:          string;
  fields:      Fields;
  createdTime: Date;
}

export interface Fields {
  UserName?:            string;
  UserID?:              number;
  UserRoleId?:          string[];
  Status?:              string;
  Password?:            string;
  OneTimePasswordFlag?: string;
  Passcode?:            string;
  UserRoles?:           string[];
  CreatedBy?:           EdBy;
  LastCreationDate?:    Date;
  LastModifiedBy?:      EdBy;
  LastModifiedDate?:    Date;
}

export interface EdBy {
  id:    string;
  email: string;
  name:  string;
}
