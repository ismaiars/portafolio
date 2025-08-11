# Tests

Este directorio contiene todos los tests del portafolio, organizados por tipo de componente.

## Estructura

```
__tests__/
├── components/
│   ├── ui/                 # Tests para componentes UI reutilizables
│   └── sections/           # Tests para secciones principales
├── hooks/                  # Tests para custom hooks
├── lib/                    # Tests para utilidades
└── README.md              # Este archivo
```

## Scripts Disponibles

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch (desarrollo)
npm run test:watch

# Ejecutar tests con coverage
npm run test:coverage

# Ejecutar tests para CI/CD
npm run test:ci

# Actualizar snapshots
npm run test:update

# Debug de tests problemáticos
npm run test:debug
```

## Cobertura de Tests

Objetivo de cobertura mínima: **70%**

- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## Convenciones

### Nomenclatura
- Archivos de test: `*.test.tsx` o `*.test.ts`
- Describe blocks: Nombre del componente/función + "Component" o "Hook"
- Test cases: Descripción clara de lo que se está probando

### Estructura de Tests
```typescript
describe('ComponentName Component', () => {
  beforeEach(() => {
    // Setup antes de cada test
  })

  afterEach(() => {
    // Cleanup después de cada test
  })

  it('renders correctly', () => {
    // Test básico de renderizado
  })

  it('handles user interactions', () => {
    // Test de interacciones
  })

  it('handles edge cases', () => {
    // Test de casos límite
  })
})
```

### Mocks
- Framer Motion está mockeado globalmente
- Next.js router está mockeado globalmente
- IntersectionObserver y ResizeObserver están mockeados
- Componentes externos se mockean según necesidad

## Qué Testear

### Componentes UI
- ✅ Renderizado correcto
- ✅ Props y variantes
- ✅ Eventos de usuario
- ✅ Estados (loading, error, success)
- ✅ Accesibilidad básica

### Hooks
- ✅ Valor de retorno
- ✅ Efectos secundarios
- ✅ Casos límite
- ✅ Cleanup

### Utilidades
- ✅ Entrada y salida esperada
- ✅ Casos límite
- ✅ Manejo de errores

## Herramientas

- **Jest**: Framework de testing
- **React Testing Library**: Testing de componentes React
- **Jest DOM**: Matchers adicionales para DOM
- **User Event**: Simulación de eventos de usuario

## Tips

1. **Prioriza tests de comportamiento** sobre tests de implementación
2. **Usa data-testid** solo cuando sea necesario
3. **Mockea dependencias externas** pero no internas
4. **Escribe tests legibles** que sirvan como documentación
5. **Mantén tests simples** y enfocados en una sola cosa

## Debugging

Si un test falla:

1. Ejecuta solo ese test: `npm test -- --testNamePattern="nombre del test"`
2. Usa `screen.debug()` para ver el DOM renderizado
3. Verifica mocks y setup
4. Revisa la consola para warnings

## Contribuir

Al agregar nuevos componentes:

1. Crea el test correspondiente
2. Asegúrate de mantener la cobertura mínima
3. Sigue las convenciones establecidas
4. Actualiza esta documentación si es necesario