// Context are written in JS files and not in JSX files;

import React from 'react';

const UserContext = React.createContext();

export default UserContext;

/**
 * With every context we need to add a provider to use it
 * <UserContext>  here the UserContext has become a provider => component inside it has access to this global UserContext;
 * <Caller 1 />
 * <Caller 2>
 *      <data 1/>
 *      <data 2/>
 * </Caller>
 * </UserContext>
 */