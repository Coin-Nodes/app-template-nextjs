/**
 * Formata um CPF para o formato `XXX.XXX.XXX-XX`.
 * @param cpf O CPF a ser formatado.
 * @returns O CPF formatado ou o valor original se o tamanho estiver incorreto.
 */
export const formatCPF = (cpf: string): string => {
  const cleanedCpf = cpf.replace(/\D/g, "");
  if (cleanedCpf.length !== 11) return cpf;

  return cleanedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

/**
 * Formata um CNPJ para o formato `XX.XXX.XXX/0001-XX`.
 * @param cnpj O CNPJ a ser formatado.
 * @returns O CNPJ formatado ou o valor original se o tamanho estiver incorreto.
 */
export const formatCNPJ = (cnpj: string): string => {
  const cleanedCnpj = cnpj.replace(/\D/g, "");
  if (cleanedCnpj.length !== 14) return cnpj;

  return cleanedCnpj.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    "$1.$2.$3/$4-$5"
  );
};

/**
 * Formata um RG para o formato `XX.XXX.XXX-X`.
 * @param rg O RG a ser formatado.
 * @returns O RG formatado ou o valor original se o tamanho estiver incorreto.
 */
export const formatRG = (rg: string): string => {
  const cleanedRg = rg.replace(/\D/g, "");
  if (cleanedRg.length < 7 || cleanedRg.length > 10) return rg;

  // Formato padrão para RG: XX.XXX.XXX-X (variando a quantidade de dígitos)
  return cleanedRg.replace(/(\d{1,2})(\d{3})(\d{3})(\d{0,1})/, "$1.$2.$3-$4");
};
