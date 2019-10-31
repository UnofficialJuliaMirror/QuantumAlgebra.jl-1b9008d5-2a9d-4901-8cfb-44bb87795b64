var documenterSearchIndex = {"docs":
[{"location":"interface/#Interface-1","page":"Interface","title":"Interface","text":"","category":"section"},{"location":"interface/#","page":"Interface","title":"Interface","text":"","category":"page"},{"location":"interface/#","page":"Interface","title":"Interface","text":"Modules = [QuantumAlgebra]","category":"page"},{"location":"interface/#QuantumAlgebra.Corr","page":"Interface","title":"QuantumAlgebra.Corr","text":"Corr(A::Operator)\n\nRepresents correlations of operator A. A should be a product for this to make sense, in which case AB_c = AB - AB, with corresponding extensions for products of more operators.\n\nSee also: ascorr\n\n\n\n\n\n","category":"type"},{"location":"interface/#QuantumAlgebra.ExpVal","page":"Interface","title":"QuantumAlgebra.ExpVal","text":"ExpVal(A::Operator): represent expectation value A\n\n\n\n\n\n","category":"type"},{"location":"interface/#QuantumAlgebra.OpSumAnalytic","page":"Interface","title":"QuantumAlgebra.OpSumAnalytic","text":"OpSumAnalytic(i::Symbol,A::Operator) or ∑(i,A): represent sum_i A, with all possible values of i assumed to be included\n\n\n\n\n\n","category":"type"},{"location":"interface/#QuantumAlgebra.a","page":"Interface","title":"QuantumAlgebra.a","text":"a(inds): represent bosonic annihilation operator a_inds\n\n\n\n\n\n","category":"type"},{"location":"interface/#QuantumAlgebra.adag","page":"Interface","title":"QuantumAlgebra.adag","text":"adag(inds): represent bosonic creation operator a^_inds\n\n\n\n\n\n","category":"type"},{"location":"interface/#QuantumAlgebra.f","page":"Interface","title":"QuantumAlgebra.f","text":"f(inds): represent fermionic annihilation operator f_inds\n\n\n\n\n\n","category":"type"},{"location":"interface/#QuantumAlgebra.fdag","page":"Interface","title":"QuantumAlgebra.fdag","text":"fdag(inds): represent fermionic creation operator f^_inds\n\n\n\n\n\n","category":"type"},{"location":"interface/#QuantumAlgebra.param","page":"Interface","title":"QuantumAlgebra.param","text":"param(g,(:i,:j),'n'): represent a scalar named parameter g_ij. state can be purely real ('r'), not conjugated ('n'), or conjugated ('c')\n\n\n\n\n\n","category":"type"},{"location":"interface/#QuantumAlgebra.scal","page":"Interface","title":"QuantumAlgebra.scal","text":"Represent a scalar value (i.e., a number)\n\n\n\n\n\n","category":"type"},{"location":"interface/#QuantumAlgebra.Avac","page":"Interface","title":"QuantumAlgebra.Avac","text":"Avac(A::Operator), vacA(A::Operator)\n\nSimplify operator by assuming it is applied to the vacuum from the left or right, respectively. To be precise, Avac(A) returns A such that A0 = A0, while vacA(A) does the same for 0A.\n\n\n\n\n\n","category":"function"},{"location":"interface/#QuantumAlgebra.ascorr","page":"Interface","title":"QuantumAlgebra.ascorr","text":"ascorr(expr::Operator)\n\nTake an expression expr=A B C + D E... and write its expectation value in terms of single-body expectation values A B ldots, and many-body correlations AB_c ABC_c, etc. Currently, up to fourth-order correlations (i.e., products of four operators) are supported.\n\nE.g., ascorr(adag(:n)*a(:n)) returns a^dagger_n a_n_c + a^dagger_n a_n (which is equal to a^dagger_n a_n), while ascorr(adag(:n)*a(:m)*a(:n)) returns langle a_n^dagger a_m a_n rangle_c + langle a_n^dagger rangle langle a_m rangle langle a_n rangle + langle a_n^dagger rangle langle a_m a_n rangle_c + langle a_m rangle langle a_n^dagger a_n rangle_c + langle a_n rangle langle a_n^dagger a_m rangle_c.\n\nSee also: ExpVal, Corr\n\n\n\n\n\n","category":"function"},{"location":"interface/#QuantumAlgebra.vacA","page":"Interface","title":"QuantumAlgebra.vacA","text":"Avac(A::Operator), vacA(A::Operator)\n\nSimplify operator by assuming it is applied to the vacuum from the left or right, respectively. To be precise, Avac(A) returns A such that A0 = A0, while vacA(A) does the same for 0A.\n\n\n\n\n\n","category":"function"},{"location":"interface/#QuantumAlgebra.vacExpVal","page":"Interface","title":"QuantumAlgebra.vacExpVal","text":"vacExpVal(A::Operator,S::Operator=scal(1))\n\nCalculate the vacuum expectation value 0S^dagger A S0, i.e., the expectation value ψAψ for the state defined by ψ= S0`.\n\n\n\n\n\n","category":"function"},{"location":"interface/#QuantumAlgebra.σm-Tuple","page":"Interface","title":"QuantumAlgebra.σm","text":"σm(n): construct σ^-_n = frac12 σ_xn - fraci2 σ_yn\n\n\n\n\n\n","category":"method"},{"location":"interface/#QuantumAlgebra.σp-Tuple","page":"Interface","title":"QuantumAlgebra.σp","text":"σp(n): construct σ^+_n = frac12 σ_xn + fraci2 σ_yn\n\n\n\n\n\n","category":"method"},{"location":"interface/#QuantumAlgebra.σx-Tuple","page":"Interface","title":"QuantumAlgebra.σx","text":"σx(n): construct σ_xn\n\n\n\n\n\n","category":"method"},{"location":"interface/#QuantumAlgebra.σy-Tuple","page":"Interface","title":"QuantumAlgebra.σy","text":"σy(n): construct σ_yn\n\n\n\n\n\n","category":"method"},{"location":"interface/#QuantumAlgebra.σz-Tuple","page":"Interface","title":"QuantumAlgebra.σz","text":"σz(n): construct σ_zn\n\n\n\n\n\n","category":"method"},{"location":"interface/#QuantumAlgebra.σ","page":"Interface","title":"QuantumAlgebra.σ","text":"σ(a,n): represent Pauli matrix σ_an for two-level system (TLS) n, where a  xyz or 123 is the type of Pauli matrix.\n\n\n\n\n\n","category":"type"},{"location":"interface/#QuantumAlgebra.σminus","page":"Interface","title":"QuantumAlgebra.σminus","text":"QuantumAlgebra.σminus(inds): represent TLS annihilation operator σ^-_inds\n\n\n\n\n\n","category":"type"},{"location":"interface/#QuantumAlgebra.σplus","page":"Interface","title":"QuantumAlgebra.σplus","text":"QuantumAlgebra.σplus(inds): represent TLS creation operator σ^+_inds\n\n\n\n\n\n","category":"type"},{"location":"interface/#QuantumAlgebra.ensure_compatible_sumind-Tuple{OpSumAnalytic,QuantumAlgebra.Operator}","page":"Interface","title":"QuantumAlgebra.ensure_compatible_sumind","text":"sum indices have no semantic meaning, so rename them in case they happen to occur in the other expression\n\n\n\n\n\n","category":"method"},{"location":"interface/#QuantumAlgebra.extindices-Tuple{QuantumAlgebra.Operator}","page":"Interface","title":"QuantumAlgebra.extindices","text":"extindices(A::Operator) return externally visible indices of an expression\n\n\n\n\n\n","category":"method"},{"location":"interface/#QuantumAlgebra.symmetric_index_nums-Tuple{QuantumAlgebra.Operator}","page":"Interface","title":"QuantumAlgebra.symmetric_index_nums","text":"symmetric_index_nums(A::Operator) return sequence of numbers of exchange-symmetric indices\n\n\n\n\n\n","category":"method"},{"location":"#[QuantumAlgebra.jl](https://github.com/jfeist/QuantumAlgebra.jl)-quantum-operator-algebra-in-Julia-1","page":"Home","title":"QuantumAlgebra.jl - quantum operator algebra in Julia","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This package does quantum operator algebra (i.e., algebra with non-commuting operators) in Julia. It defines an opinionated canonical form (normal ordering plus some additional rules) that all expressions are automatically transformed to, which fulfills some invariants that then allows easy use of the resulting expressions. It is recommended to use an interface that can display LaTeX formulas (e.g., Jupyter notebooks) for convenient output formatting.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"We define an abstract type that represents an operator, and some concrete subtypes to describe various operators. We have:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"scal(x) representing a scalar x\nparam(g,(i,j),state='n') representing a named scalar parameter g_ij. state can be 'r' for purely real parameters (invariant under complex conjugation), 'n' for not-conjugated values, and 'c' for a conjugated parameter g_ij^*.\na(i) and adag(i) representing a_i and a_i^, the annihilation and creation operators for bosonic mode i\nσ(a,i) representing the Pauli matrix σ_ai for two-level system (TLS) i, where a  x=1y=2z=3 is the type of Pauli matrix.\nOpProd(A,B) representing A B, i.e., the product of two operators\nOpSum(A,B) representing A + B, i.e., the sum of two operators\nOpSumAnalytical(i,A) representing _i A, i.e., an analytical sum over an index (assumed to run over all possible values of i).\nExpVal(A) representing the expectation value A\nCorr(AB) representing the correlation AB_c = AB - AB, with corresponding extensions for products of more operators.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"All operations are defined in such a way that the finally created object is automatically transformed to \"canonical\" form, which is defined by the following:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Operator sums are expanded fully, such that the final expression is always a sum of operator products. I.e., if we write (A + B)(C + D), we get AC + AD + BC + BD.\nOperator products are expressed in a well-defined \"canonical\" order. To achieve this canonical form, relevant commutators etc are used, so that an expression written as a single product can turn into a sum of expressions.\nat most one scalar prefactor (i.e., all prefactors collapsed into one)\nparameters ordered alphabetically (by string comparison)\nexpectation values A\nmany-body correlations AB_c\nbosonic operators in normal ordering (i.e., first creation, then annihilation operators), ordered by mode index\nTwo-level Pauli matrices, ordered by TLS mode index. At most one Pauli matrix per TLS\nOperator sums are ordered first by number of operators (both bare and within expectation values and correlations), and then with the same priority rules.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Some other useful functions that are implemented:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"comm(A,B): calculates the commutator of arbitrary operators AB = AB - BA. This allows, e.g., to calculate Heisenberg equations of motion for the operators.\nascorr(x) takes an expression x=A B C + D E... and writes its expectation value in terms of single-body expectation values A, B, ..., and many-body correlations AB_c, ABC_c, etc. Currently, up to fourth-order correlations (i.e., products of four operators) are supported.\nAvac(A) and vacA(A) simplify operators by assuming they are applied to the vacuum from the left or right, respectively. To be precise, Avac(A) returns A such that A0 = A0, while vacA(A) does the same for 0A.\nvacExpVal(A,S=1) calculates the vacuum expectation value 0S^AS0, i.e., the expectation value ψAψ for the state defined by ψ=S0.","category":"page"}]
}
