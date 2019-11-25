import React, { Component } from "react";
import b_logo from "./media/c++.png"

class C_Plus extends Component {
  render() {
    return (
      <div className="card">
        <h1>C++</h1>
        <img src={b_logo} className="react-logo" alt="react_logo" />

        <p> C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms. C++ was designed with a bias toward system programming and embedded, resource-constrained software and large systems, with performance, efficiency¸ and flexibility of use as its design highlights.[7] C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications,[7] including desktop applications, servers (e.g. e-commerce, Web search, or SQL servers), and performance-critical applications (e.g. telephone switches or space probes).</p>
        <div>Date: 11/24/2019</div>
      </div>
    );
  }
}

export default C_Plus;