/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPORTFOLIOLAPTOPNEW = /* GraphQL */ `
  query GetPORTFOLIOLAPTOPNEW($id: ID!) {
    getPORTFOLIOLAPTOPNEW(id: $id) {
      id
      imgLaptop
      imgContent
      projectTitle
      projectDescription
      btnTex
      btnLink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPORTFOLIOLAPTOPNEWS = /* GraphQL */ `
  query ListPORTFOLIOLAPTOPNEWS(
    $filter: ModelPORTFOLIOLAPTOPNEWFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPORTFOLIOLAPTOPNEWS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        imgLaptop
        imgContent
        projectTitle
        projectDescription
        btnTex
        btnLink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPORTFOLIOLAPTOPNEWS = /* GraphQL */ `
  query SyncPORTFOLIOLAPTOPNEWS(
    $filter: ModelPORTFOLIOLAPTOPNEWFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPORTFOLIOLAPTOPNEWS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        imgLaptop
        imgContent
        projectTitle
        projectDescription
        btnTex
        btnLink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRESUME = /* GraphQL */ `
  query GetRESUME($id: ID!) {
    getRESUME(id: $id) {
      id
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRESUMES = /* GraphQL */ `
  query ListRESUMES(
    $filter: ModelRESUMEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRESUMES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        source
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRESUMES = /* GraphQL */ `
  query SyncRESUMES(
    $filter: ModelRESUMEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRESUMES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        source
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMUSIC = /* GraphQL */ `
  query GetMUSIC($id: ID!) {
    getMUSIC(id: $id) {
      id
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMUSIC = /* GraphQL */ `
  query ListMUSIC(
    $filter: ModelMUSICFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMUSIC(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        source
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMUSIC = /* GraphQL */ `
  query SyncMUSIC(
    $filter: ModelMUSICFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMUSIC(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        source
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPORTFOLIOLAPTOP = /* GraphQL */ `
  query GetPORTFOLIOLAPTOP($id: ID!) {
    getPORTFOLIOLAPTOP(id: $id) {
      id
      imgLaptop
      imgContent
      projectTitle
      projectDescription
      btnText
      btnLink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPORTFOLIOLAPTOPS = /* GraphQL */ `
  query ListPORTFOLIOLAPTOPS(
    $filter: ModelPORTFOLIOLAPTOPFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPORTFOLIOLAPTOPS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        imgLaptop
        imgContent
        projectTitle
        projectDescription
        btnText
        btnLink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPORTFOLIOLAPTOPS = /* GraphQL */ `
  query SyncPORTFOLIOLAPTOPS(
    $filter: ModelPORTFOLIOLAPTOPFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPORTFOLIOLAPTOPS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        imgLaptop
        imgContent
        projectTitle
        projectDescription
        btnText
        btnLink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPORTFOLIOPHONE = /* GraphQL */ `
  query GetPORTFOLIOPHONE($id: ID!) {
    getPORTFOLIOPHONE(id: $id) {
      id
      imgPhone
      imgContent
      projectTitle
      projectDescription
      btnText
      btnLink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPORTFOLIOPHONES = /* GraphQL */ `
  query ListPORTFOLIOPHONES(
    $filter: ModelPORTFOLIOPHONEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPORTFOLIOPHONES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imgPhone
        imgContent
        projectTitle
        projectDescription
        btnText
        btnLink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPORTFOLIOPHONES = /* GraphQL */ `
  query SyncPORTFOLIOPHONES(
    $filter: ModelPORTFOLIOPHONEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPORTFOLIOPHONES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        imgPhone
        imgContent
        projectTitle
        projectDescription
        btnText
        btnLink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getINTROes = /* GraphQL */ `
  query GetINTROes($id: ID!) {
    getINTROes(id: $id) {
      id
      firstText
      name
      description
      emphasesedText
      descriptionCont
      githubLink
      linkedinLink
      instagramLink
      githubImage
      linkedinImage
      instagramImage
      glasses
      floatingrightImage
      floatingrightText
      floatingleftImage
      floatingleftText
      characterImage
      blueBkImage
      orangeBkImage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listINTROes = /* GraphQL */ `
  query ListINTROes(
    $filter: ModelINTROesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listINTROes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstText
        name
        description
        emphasesedText
        descriptionCont
        githubLink
        linkedinLink
        instagramLink
        githubImage
        linkedinImage
        instagramImage
        glasses
        floatingrightImage
        floatingrightText
        floatingleftImage
        floatingleftText
        characterImage
        blueBkImage
        orangeBkImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncINTROes = /* GraphQL */ `
  query SyncINTROes(
    $filter: ModelINTROesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncINTROes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstText
        name
        description
        emphasesedText
        descriptionCont
        githubLink
        linkedinLink
        instagramLink
        githubImage
        linkedinImage
        instagramImage
        glasses
        floatingrightImage
        floatingrightText
        floatingleftImage
        floatingleftText
        characterImage
        blueBkImage
        orangeBkImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNAVBAR = /* GraphQL */ `
  query GetNAVBAR($id: ID!) {
    getNAVBAR(id: $id) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listNAVBARS = /* GraphQL */ `
  query ListNAVBARS(
    $filter: ModelNAVBARFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNAVBARS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNAVBARS = /* GraphQL */ `
  query SyncNAVBARS(
    $filter: ModelNAVBARFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNAVBARS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSERVICES = /* GraphQL */ `
  query GetSERVICES($id: ID!) {
    getSERVICES(id: $id) {
      id
      awesome
      services
      text
      cardDesign
      cardDeveloper
      cardUi
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSERVICES = /* GraphQL */ `
  query ListSERVICES(
    $filter: ModelSERVICESFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSERVICES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        awesome
        services
        text
        cardDesign
        cardDeveloper
        cardUi
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSERVICES = /* GraphQL */ `
  query SyncSERVICES(
    $filter: ModelSERVICESFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSERVICES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        awesome
        services
        text
        cardDesign
        cardDeveloper
        cardUi
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEXPERIENCE = /* GraphQL */ `
  query GetEXPERIENCE($id: ID!) {
    getEXPERIENCE(id: $id) {
      id
      yearsExperience
      completedProjects
      companiesWord
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEXPERIENCES = /* GraphQL */ `
  query ListEXPERIENCES(
    $filter: ModelEXPERIENCEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEXPERIENCES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        yearsExperience
        completedProjects
        companiesWord
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEXPERIENCES = /* GraphQL */ `
  query SyncEXPERIENCES(
    $filter: ModelEXPERIENCEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEXPERIENCES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        yearsExperience
        completedProjects
        companiesWord
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWORKS = /* GraphQL */ `
  query GetWORKS($id: ID!) {
    getWORKS(id: $id) {
      id
      works
      brands
      text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listWORKS = /* GraphQL */ `
  query ListWORKS(
    $filter: ModelWORKSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWORKS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        works
        brands
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWORKS = /* GraphQL */ `
  query SyncWORKS(
    $filter: ModelWORKSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWORKS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        works
        brands
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPORTFOLIO = /* GraphQL */ `
  query GetPORTFOLIO($id: ID!) {
    getPORTFOLIO(id: $id) {
      id
      recent
      portfolio
      text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPORTFOLIOS = /* GraphQL */ `
  query ListPORTFOLIOS(
    $filter: ModelPORTFOLIOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPORTFOLIOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recent
        portfolio
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPORTFOLIOS = /* GraphQL */ `
  query SyncPORTFOLIOS(
    $filter: ModelPORTFOLIOFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPORTFOLIOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        recent
        portfolio
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTESTIMONIALS = /* GraphQL */ `
  query GetTESTIMONIALS($id: ID!) {
    getTESTIMONIALS(id: $id) {
      id
      img
      review
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTESTIMONIALS = /* GraphQL */ `
  query ListTESTIMONIALS(
    $filter: ModelTESTIMONIALSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTESTIMONIALS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        img
        review
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTESTIMONIALS = /* GraphQL */ `
  query SyncTESTIMONIALS(
    $filter: ModelTESTIMONIALSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTESTIMONIALS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        img
        review
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCONTACT = /* GraphQL */ `
  query GetCONTACT($id: ID!) {
    getCONTACT(id: $id) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCONTACTS = /* GraphQL */ `
  query ListCONTACTS(
    $filter: ModelCONTACTFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCONTACTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCONTACTS = /* GraphQL */ `
  query SyncCONTACTS(
    $filter: ModelCONTACTFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCONTACTS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFOOTER = /* GraphQL */ `
  query GetFOOTER($id: ID!) {
    getFOOTER(id: $id) {
      id
      instagramLink
      linkedinLink
      githubLink
      allRights
      email
      developer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFOOTERS = /* GraphQL */ `
  query ListFOOTERS(
    $filter: ModelFOOTERFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFOOTERS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        instagramLink
        linkedinLink
        githubLink
        allRights
        email
        developer
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFOOTERS = /* GraphQL */ `
  query SyncFOOTERS(
    $filter: ModelFOOTERFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFOOTERS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        instagramLink
        linkedinLink
        githubLink
        allRights
        email
        developer
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
