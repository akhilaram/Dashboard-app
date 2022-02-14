import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import App from './App';

describe("should render", () => {
  it("App", async () => {
    const mockData: any = [];
    render(
      <MockedProvider mocks={mockData}>
        <App />
      </MockedProvider>
    );
    const headerElement = screen.getByText(/Loading .../i);
    expect(headerElement).toBeInTheDocument();
  });
});
