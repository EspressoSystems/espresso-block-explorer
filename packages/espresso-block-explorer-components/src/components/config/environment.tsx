import { Environment } from '@/models/config/environment/environment';
import React from 'react';

/**
 * EnvironmentContext provides the current environment configuration for the
 * entire application.
 *
 * Information about the environment can be used to derive various properties
 * of the application.
 */
export const EnvironmentContext = React.createContext(Environment.fakeData);
